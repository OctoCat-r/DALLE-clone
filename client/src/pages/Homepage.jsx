import React, { useEffect, useState, useRef } from "react";

import { Loader, FormField, Card } from "../componenets";
// import FormField from "../componenets/FormField";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post_.id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl upercase">{title}</h2>
  );
};
const Homepage = () => {
  const [loading, setloading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[33px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[15px] max-w-[500px]">
          DALL·E 2 is an AI system that can create realistic images and art from
          a description in natural language. Quick links Try DALL·E
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No search results found"
                />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Homepage;
