type Props = {
  params: {
    slug?: string[];
  };
};

export default function NotesFilterSlugPage({ params }: Props) {
  return (
    <div>
      <h1>Notes filter</h1>
      <p>Slug: {params.slug?.join("/") ?? "no filter"}</p>
    </div>
  );
}
