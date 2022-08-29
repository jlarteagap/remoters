export const initialValues = {
  title: 'Hola',
  company: '',
  link: '',
  category: '',
  city: '',
  remote: false,
  country: 'Bolivia',
  contract: '',
  salary: '',
  currency: 'Bs.',
  slug: ''
}

export const initialValuesEdit = data => {
  console.log(data)
  const { id, category, ubication, content, link, remote } = data
  console.log(id, category, ubication, content, link)
  const initialData = {
    id: id,
    active: true,
    category: category,
    city: ubication,
    country: ubication.name,
    link: link,
    remote: remote,
    money: content.currency,
    title: content.title,
    salary: content.salary,
    contract: content.contract,
    companySimple: data.companySimple,
    company: data.company
  }

  return initialData
}
