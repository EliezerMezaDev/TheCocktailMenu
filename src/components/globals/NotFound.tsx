import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { TbError404 } from "react-icons/tb";

export const NotFound = ({
  show,
  title = 'Upss...',
  message,
}: {
  show: boolean;
  title?: string;
  message: string;
}) => {
  if (!show) return <></>;

  return (
    <article className="notFound">
        <span className="notFound__iconWrapper">

      <BsFillEmojiSmileUpsideDownFill className="notFound__icon"/>

        </span>

      <label className="notFound__title">{title}</label>
      <p className="notFound__message">{message}</p>
    </article>
  );
};
