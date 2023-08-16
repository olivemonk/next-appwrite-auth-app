"use client";
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then(() => {
      setAuthStatus(false);
      router.replace("/login");
    });
  }, []);

  return <></>;
};

export default LogoutPage;
