interface DivItemProps {
  id: string;
  visible: boolean;
}

const DivItem: React.FC<DivItemProps> = ({ id, visible }) => {
  if (!visible) return null;

  return (
    <div className="col border p-2 text-center">
      {id}
    </div>
  );
};

export default DivItem;