export const initialValues = {
  title: '',
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
  const { id, category, content, link, remote, location } = data
  const initialData = {
    id: id,
    active: true,
    category: category,
    city: location.city.name,
    country: location.country.name,
    link: link,
    remote: remote,
    currency: content.currency,
    title: content.title,
    salary: content.salary,
    contract: content.contract,
    description: content.description,
    company: data.company.name
  }

  return initialData
}
