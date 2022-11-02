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
  slug: '',
  active: true
}

export const initialValuesEdit = data => {
  const { id, category, content, link, remote, location, active } = data
  const initialData = {
    id,
    active,
    category,
    city: location.city.name,
    country: location.country.name,
    link,
    remote,
    currency: content.currency,
    title: content.title,
    salary: content.salary,
    contract: content.contract,
    description: content.description,
    company: data.company.name
  }

  return initialData
}
