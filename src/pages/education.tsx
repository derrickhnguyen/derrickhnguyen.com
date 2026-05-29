import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/#education", permanent: true },
});

export default function Education() {
  return null;
}
