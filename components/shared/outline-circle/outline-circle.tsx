interface OutlineCircleProps {
  size: 'sm' | 'md' | 'lg'
}
export const OutlineCircle = ({ size }: OutlineCircleProps) => {
  switch (size) {
    case 'sm':
      return (
        <svg
          className="outline outline-none"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle
            className="stroke-current stroke-1"
            cx="32"
            cy="32"
            r="31.5"
            strokeDasharray={170}
          />
        </svg>
      )
    case 'md':
      return (
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
          <circle
            cx="55"
            cy="55"
            r="54.5"
            strokeDasharray={280}
            className="stroke-current stroke-1"
          />
        </svg>
      )
    default:
      return (
        <svg width="150" height="150" viewBox="0 0 130 130" fill="none">
          <circle
            cx="65"
            cy="65"
            r="54.5"
            className="stroke-current stroke-1"
            strokeDasharray={280}
          />
        </svg>
      )
  }
}
