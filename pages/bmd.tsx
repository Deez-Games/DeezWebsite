import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectLink =
      "https://drive.usercontent.google.com/download?id=1GTZrZFX2_KKYtkNA6rLVUb_fXc1r3fu5&export=download&authuser=0";

    router.push(redirectLink);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Redirecting...
    </div>
  );
};

export default RedirectPage;
