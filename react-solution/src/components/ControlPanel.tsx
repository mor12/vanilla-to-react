import ToggleButton from './ToggleButton';

interface ControlPanelProps {
    state: Record<string, boolean>;
    onToggle: (id: string) => void;
    onSave: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ state, onToggle, onSave }) => {
    return (
        <div className="mt-3">
            <div className="row">
                <div className="col">
                    {/* Group 1-6 */}
                    {Object.keys(state).slice(0, 6).map((key) => (
                        <ToggleButton
                            key={key}
                            id={key}
                            visible={state[key]}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    {/* Group 7-8 */}
                    {Object.keys(state).slice(6).map((key) => (
                        <ToggleButton
                            key={key}
                            id={key}
                            visible={state[key]}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            </div>

            {/* Save Button */}
            <div className="row mt-2">
                <div className="col">
                    <button className="btn btn-success" onClick={onSave}>
                        Save State
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;