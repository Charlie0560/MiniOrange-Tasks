// pages/index.js
import Link from "next/link";

const Index = ({ users }) => {
  return (
    <div>
      <h1>Blog Posts888</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <Link href={`/blog/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  try {
    console.log("Start fetching data...");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      console.error(`Failed to fetch data. Status: ${response.status}`);
      return {
        notFound: true, // or handle the error as needed
      };
    }

    const data = await response.json();

    console.log("Data fetched successfully:", data);

    return {
      props: { users: data },
    };
  } catch (error) {
    console.error("Error during data fetching:", error);
    return {
      notFound: true, // or handle the error as needed
    };
  }
}

export default Index;
