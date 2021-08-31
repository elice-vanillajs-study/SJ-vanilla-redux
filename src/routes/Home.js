import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
