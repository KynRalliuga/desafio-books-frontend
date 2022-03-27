interface inputTextInterface {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  label?: string;
  suffixButtonText?: string;
  onClickSuffixButton?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const InputText: React.FC<inputTextInterface> = (props) => {
  const {
    value,
    placeholder,
    onChange,
    type,
    label,
    suffixButtonText,
    onClickSuffixButton,
  } = props;

  const labelElement = label ? (
    <span className="pb-1 flex text-white/50 text-xs">{label}</span>
  ) : null;

  const suffixButtonElement = suffixButtonText ? (
    <button
      className="bg-white ml-4 px-5 py-1.5 rounded-full font-medium text-theme-purple"
      onClick={onClickSuffixButton}
    >
      {suffixButtonText}
    </button>
  ) : null;

  return (
    <div className="px-4 py-2 rounded flex items-center bg-black/[0.32]">
      <label className="w-full">
        {labelElement}
        <input
          type={type ?? "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-white text-base bg-transparent w-full placeholder:text-white focus-visible:outline-none"
        />
      </label>
      {suffixButtonElement}
    </div>
  );
};

export default InputText;
