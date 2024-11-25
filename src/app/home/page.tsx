import { mainService } from "@/features/main/instance";
import { addContractor } from "../../actions/actions";

export default async function Home() {
  const data = await mainService.getContractors();
  const contractors = data.map((name) => name.name);

  return (
    <main className="container mx-auto bg-slate-300">
      <form action={addContractor}>
        <input
          className="input input-bordered input-accent m-3 rounded-md"
          placeholder="id"
          type="text"
          id="id"
          name="id"
        />
        <input
          className="input input-bordered input-accent m-3 rounded-md"
          placeholder="name"
          type="text"
          id="name"
          name="name"
        />
        <input
          className="input input-bordered input-accent m-3 rounded-md"
          placeholder="email"
          type="email"
          id="email"
          name="email"
        />
        <button className="p-2 bg-slate-500 rounded" type="submit">
          Send
        </button>
      </form>
      <ul>{contractors}</ul>
    </main>
  );
}
