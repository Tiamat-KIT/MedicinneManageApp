
import Modal from "~/components/Modal";
import Table from "~/components/Table";

export default function Home() {
  return (
    <>
    
    <main class="mx-auto text-gray-700 p-4">
    <Table />
      <div class="fixed bottom-4 right-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-12 rounded-full flex items-center justify-center"
          onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement)!.showModal()}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H6a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1z"/>
          </svg>
        </button>
      </div>
      <Modal />
    </main>
    </>
    
  );
}
