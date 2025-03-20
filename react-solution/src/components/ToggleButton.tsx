interface ToggleButtonProps {
  id: string;
  visible: boolean;
  onToggle: (id: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ id, visible, onToggle }) => {
  return (
    <button
      className={`btn ${visible ? 'btn-primary' : 'btn-secondary'} mr-2`}
      onClick={() => onToggle(id)}
    >
      {visible ? `Disable ${id}` : `Enable ${id}`}
    </button>
  );
};

export default ToggleButton;