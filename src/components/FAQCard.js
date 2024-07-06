export const FAQCard = ({ONClicker, info, que}) => {
    return (
        <div className="collapse collapse-arrow py-3 border-b-2 text-cyan-900 font-semibold max-w-5xl collapse-close bg-white " onClick={ONClicker}>
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-medium">
        {que}
        </div>
        <div className="collapse-content text-base text-slate-400">
       {info}
        </div>
      </div>
    )
}