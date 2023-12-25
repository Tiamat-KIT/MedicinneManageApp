import { Show, mergeProps, type Component } from "solid-js";
import { IFormControl, createFormControl } from "solid-forms";

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