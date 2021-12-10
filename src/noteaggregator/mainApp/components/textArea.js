export default function TextArea(props) {
    const rows = props.rows || "8";
    const cols = props.cols || "50";
    const placeholder = props.placeholder || "Enter here!";

    return (
        <div
        className=
        {"inline-block my-4 "}>
            <textarea
                onChange={props.onChange}
                value={props.value}
                placeholder={placeholder}
                className=
                {"pl-2 border-2 border-black rounded-lg"}
                rows={rows} cols={cols} />
        </div>
    );
}
