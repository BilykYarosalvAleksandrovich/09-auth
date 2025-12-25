import NoteDetailsClient from "./NoteDetails.client";

type Props = {
  params: {
    id: string;
  };
};

export default function NotePage({ params }: Props) {
  return <NoteDetailsClient id={params.id} />;
}
