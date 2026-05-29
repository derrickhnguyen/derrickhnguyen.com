import type {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {destination: "/#experience", permanent: true},
});

export default function Employment() {
  return null;
}
