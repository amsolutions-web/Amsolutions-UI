import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        "https://docs.archway.io/validators/running-a-node/install",
      permanent: false,
    },
  };
};

export default function ArchwayRedirect() {
  return null;
}
