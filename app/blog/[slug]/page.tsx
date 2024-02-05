export default function BlogArticle({params}: {params: {slug: string}}) {
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    );
}