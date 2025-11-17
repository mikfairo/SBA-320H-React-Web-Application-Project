import '../index.css'

export default function Messages() {
  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
  }

  function save(formData) {
    const content = formData.get("content");
  }

  return (
    <form action={publish}>
      <textarea className='border' name="content" rows={4} cols={40} />
      <br />
      <button className='bg-sky-700 p-8 rounded-2xl shadow-2xl shadow-cyan-600'type="submit" name="button" value="submit">
        Publish
      </button>
    </form>
  );
}
