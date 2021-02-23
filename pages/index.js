import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Velkommen til Mikkels ønskeliste 🎉🛒</h1>
    <Link href="/gaver">
      <a>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          Ta en titt da vel! 🎈
        </button>
      </a>
    </Link>
  </div>
);

export default Home;
