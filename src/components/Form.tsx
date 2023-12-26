import { Show, mergeProps, type Component, createEffect } from "solid-js";
import { IFormControl, createFormControl,createFormGroup } from "solid-forms";

export const TextInput: Component<{
  control?: IFormControl<string>;
  name?: string;
  type?: string;
}> = (props) => {
  const InputsDesign = "input w-full max-w-xs input-bordered  "
  // here we provide a default form control in case the user doesn't supply one
  props = mergeProps({ control: createFormControl(""), type: "text" }, props);

  return (
    <div
      classList={{
        "is-invalid": !props.control!.errors,
        "is-touched": props.control!.isTouched,
        "is-required": props.control!.isRequired,
      }}
    >
      <input
        name={props.name}
        type={props.type}
        class={InputsDesign}
        value={props.control!.value}
        oninput={(e) => {
          props.control!.setValue(e.currentTarget.value);
        }}
        onblur={() => props.control!.markTouched(true)}
        required={props.control!.isRequired}
      />

      <Show when={props.control!.isTouched && props.control!.errors?.isMissing}>
        <small>Answer required.</small>
      </Show>
    </div>
  );
};




const ExampleForm: Component<{}> = () => {
  const group = createFormGroup({
    name: createFormControl(""),
    email: createFormControl("", {
      required: true,
      validators: (value: string) =>
        value.length === 0 ? { isMissing: true } : null,
    }),
  });

  // This will automatically re-run whenever `group.isDisabled`, `group.isValid` or `group.value` change
  createEffect(() => {
    if (group.isDisabled || !group.isValid) return;

    console.log("Current group value", group.value);
  });

  const onSubmit = async () => {
    if (group.isSubmitted || !group.isValid) return;

    group.markSubmitted(true);
    // do stuff...
    // const { name, email } = group.value;
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="name">Your name</label>
      <TextInput name="name" control={group.controls.name} />

      <label for="email">Your email address</label>
      <TextInput name="email" type="email" control={group.controls.email} />

      <button>Submit</button>
    </form>
  );
};

export default ExampleForm