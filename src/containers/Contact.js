import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { client } from "../client";
import Loading from "../components/Loading";
import { getContact } from "../utlis/data";
import { serializer } from "../utlis/serializer";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = getContact();
    setLoading(true);
    client.fetch(query).then((data) => {
      setData(data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="text-customGray flex flex-col items-center mb-[100px] max-w-[900px] mx-2">
      {loading && (
        <Loading text={"Loading content..."} textSize={"30px"} fontSize={30} />
      )}
      <div className="mt-[50px]">
        <PortableText value={data.content} components={serializer} />
      </div>
    </div>
  );
};

export default Contact;
