import BookSection from "./BookSection";
import AffiliateBlock from "./AffiliateBlock";
import RelatedArticles from "./RelatedArticles";
import BackToBlog from "./BackToBlog";

import { blogConfig } from "@/app/data/blogConfig";

interface ArticleExtrasProps {
    article: keyof typeof blogConfig;
}

export default function ArticleExtras({
    article,
}: ArticleExtrasProps) {
    const config = blogConfig[article];

    return (
        <>
            <BookSection />

            <AffiliateBlock
                products={config.products}
            />

            <RelatedArticles currentArticle={article} />
        </>
    );
}