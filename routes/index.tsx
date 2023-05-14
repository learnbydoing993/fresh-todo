import Todos from "../islands/Todos.tsx";

export default function Home() {
  return (
    <body class="bg-gray-200">
        <div class="mt-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12">
          <div class="mx-auto">
              <h2 class="text-2xl font-bold mb-5 text-center">Fresh Todos!</h2>
              <img class="mx-auto" src="/logo.svg" />
          </div>

          <Todos />
        </div>
    </body>
  );
}
