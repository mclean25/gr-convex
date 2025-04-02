import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";


export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery(convexQuery(api.lists.get, {}));

  return (
    <div>
      {data.map(({ _id, title, items }) => (
      <div key={_id}>
        {title}
        <ul>
          {items.map(({ _id, title: itemTitle }) => (
            <li key={_id}>{itemTitle}</li>
          ))}
        </ul>
      </div>
      ))}
    </div>
  );
}
