"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMesage/ErrorMessage";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import { fetchNoteById } from "@/lib/api/clientApi";

const NotePreview = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
    enabled: Boolean(id),
  });

  const handleClose = () => {
    router.back();
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (!data) return null;

  const formattedDate = data.updatedAt
    ? `Updated at: ${data.updatedAt}`
    : `Created at: ${data.createdAt}`;

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <button onClick={handleClose} className={css.backBtn}>
              Go Back
            </button>
            <h2>{data.title}</h2>
          </div>

          <p className={css.content}>{data.content}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
