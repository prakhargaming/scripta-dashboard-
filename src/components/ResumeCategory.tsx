// components/ResumeCategory.tsx
type ResumeCategoryProps = {
    title: string
    names: string[]
  }
  
  const ResumeCategory = ({ title, names }: ResumeCategoryProps) => (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl mb-4">{title}</h2>
      <ul>
        {names.map((name) => (
          <li key={name} className="mb-2 p-2 bg-gray-700 rounded">{name}</li>
        ))}
      </ul>
    </div>
  )
  
  export default ResumeCategory