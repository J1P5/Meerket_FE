import { ICategory } from "components/organisms/CategoryGrid";
import { CategoryTemplate } from "components/templates";
import { CATEGORIES } from "constants/categories";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTopBarStore } from "stores";

const CategoryPage = () => {
  const { clear, setTitle } = useTopBarStore();

  const navigate = useNavigate();

  const categories: ICategory[] = CATEGORIES.map(category => ({
    title: category.name,
    imgUrl: category.imgUrl,
    serverType: category.code,
  }));

  useEffect(() => {
    clear();
    setTitle("카테고리");
  }, []);
  const handleCategoryButton = (category: string) => {
    navigate(`/search/category/${category}`);
  };
  return (
    <CategoryTemplate categories={categories} onClick={handleCategoryButton} />
  );
};

export default CategoryPage;
