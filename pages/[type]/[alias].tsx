import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { firstlevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components/TopPageComponent/TopPageComponent";
import { API } from "../../helpers/api";

function TopPage({ page, products, firstCategory }: TopPageProps): JSX.Element {
  return <TopPageComponent 
          page={page} 
          products={products} 
          firstCategory={firstCategory}
        />;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for(const m of firstlevelMenu) {
      const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: m.id
      });
      paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }
	
	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstlevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id 
    });
  
    if(menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10
    });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
      page,
      products,
    },
  };

  } catch {
      return {
        notFound: true,
      };
  }
  
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
