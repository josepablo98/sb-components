import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * All Capitalize
   */
  allCaps?: boolean;
  /**
   * Color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Text font
   */
  fontColor?: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}

/**
 * ! Todas son opcionales
 * allCaps: boolean, (si true, todo mayuscula, si false, normal) ✅
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary', ✅
 * fontColor: string (se debe aplicar al color del texto del span) ✅
 * doc auto ✅
 *
 *
 */
export const MyLabel = ({ label, size, allCaps, color, fontColor, backgroundColor = 'transparent' }: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
