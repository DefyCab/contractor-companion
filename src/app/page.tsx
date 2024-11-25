import { addContractor, getContractors } from "../actions/actions";

export default async function Home() {
  const data = await getContractors();
  const contractors = data.map((name) => name.name)

  return (
    <>
      <form action={addContractor}>
        <input
          className="input input-bordered input-accent w-full m-3 rounded-md"
          placeholder="id"
          type="text"
          id="id"
          name="id"
        />
        <input
          className="input input-bordered input-accent w-full m-3 rounded-md"
          placeholder="name"
          type="text"
          id="name"
          name="name"
        />
        <input
          className="input input-bordered input-accent w-full m-3 rounded-md"
          placeholder="email"
          type="email"
          id="email"
          name="email"
        />
        <button className="p-4" type="submit">
          Send
        </button>
      </form>
      <ul>
        {contractors}
      </ul>
    </>
  );
}
