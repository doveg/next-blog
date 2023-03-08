import { Calendar, Clock, Edit } from 'react-feather';
import RadiusBox from './RadiusBox';

const text_color_gray = 'text-gray-300';

export default function ContentAddition({ item }) {
  return (
    <RadiusBox>
      <div className={`${text_color_gray} py-3`}>
        <span className="flex justify-center item-center space-x-3 text-medium">
          <Calendar size="16" className="mt-1" />
          <span>{item.date}</span>
          <span>|</span>
          <Edit size="16" className="mt-1" />
          <span>{item.author}</span>
          <span>|</span>
          <Clock size="16" className="mt-1" />
          <span>{item.eta}</span>
        </span>
      </div>
    </RadiusBox>
  );
}
