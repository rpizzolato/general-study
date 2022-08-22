import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  )
}

export default ProjectForm
