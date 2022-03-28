import React from "react";

interface inputTextInterface {
  value?: string;
  placeholder?: string;
  errorLabel?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
  type?: "text" | "password";
  label?: string;
  suffixButtonText?: string;
  onClickSuffixButton?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const InputText: React.FC<inputTextInterface> = (props) => {
  const {
    value,
    placeholder,
    errorLabel,
    onChange,
    onEnter,
    type,
    label,
    suffixButtonText,
    onClickSuffixButton,
  } = props;

  const labelElement = label && (
    <span className="pb-1 flex text-white/50 text-xs">{label}</span>
  );
  const suffixButtonElement = suffixButtonText && (
    <button
      className="bg-white ml-4 px-5 py-1.5 rounded-full font-medium text-theme-purple"
      onClick={onClickSuffixButton}
    >
      {suffixButtonText}
    </button>
  );
  const errorElement = errorLabel && (
    <span className="pt-1 flex text-red-600 text-md">{errorLabel}</span>
  );
  return (
    <div className="px-4 py-2 rounded flex items-center bg-black/[0.32]">
      <label className="w-full">
        {labelElement}
        <input
          type={type ?? "text"}
          value={value}
          onChange={onChange}
          onKeyUp={(e) => {
            if (e.key === "Enter" && onEnter) {
              onEnter();
            }
          }}
          placeholder={placeholder}
          className="text-white text-base bg-transparent w-full placeholder:text-white focus-visible:outline-none"
        />
        {errorElement}
      </label>
      {suffixButtonElement}
    </div>
  );
};

export default InputText;
