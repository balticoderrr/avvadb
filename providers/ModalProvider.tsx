"use client";

import AuthModal from "@/components/AuthModal";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <DeleteModal />
      <UpdateModal />
    </>
  );
};

export default ModalProvider;
