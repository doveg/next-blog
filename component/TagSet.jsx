import TagBadge from './TagBadge';
import RadiusBox from './RadiusBox';

const box_color = 'bg-slate-800';

export default function TagSet({ list }) {
  return (
    <RadiusBox>
      <div className="flex justify-center item-center space-x-4 py-6">
        <TagBadge key="All" tag="All" />
        {list[0].map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </RadiusBox>
  );
}
