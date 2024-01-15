function Name({ firstName, lastName }) {
  return (
    <>
      <h1 style={{ fontWeight: "bold", color: "blue" }}>
        {firstName} {lastName}
      </h1>
    </>
  );
}

export default Name;
