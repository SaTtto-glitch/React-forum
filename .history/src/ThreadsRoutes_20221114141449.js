
function Post(props) {
  const id = props.match.params.id;
  return <h2>Post {id}</h2>;
}