import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { TextInput } from "~/components/Form";
import { } from "solid-js/html"
export default function Home() {
  return (
    <>
    
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
      <div class="fixed bottom-4 right-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-12 rounded-full flex items-center justify-center"
          onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement)!.showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H6a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1z"/>
          </svg>
        </button>
      </div>
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
          <TextInput />
            <form method="dialog" class="modal-backdrop">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
    </>
    
  );
}
