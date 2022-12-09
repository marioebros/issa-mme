import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setloading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setloading(true);

    if(categoryId) {
      const query = searchQuery(categoryId);
    } else {

    }
  }, [categoryId])

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />
  return (
    <div>Feed</div>
  )
}

export default Feed