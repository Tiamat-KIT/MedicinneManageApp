import ExampleForm from "./Form";

export default function Modal(){
    return (
        <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">New Medicine</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="flex flex-row space-x-10">
            <div class="modal-action">
                <form method="dialog" class="modal-backdrop">
                    <button class="btn">Close</button>
                </form>
            </div>
            <div class="pt-6">
                <button class="btn btn-primary">登録</button>
            </div>
          </div>
        </div>
      </dialog>
    )
}