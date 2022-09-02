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
  const { id, category, content, link, remote, location, type } = data
  console.log(data)
  const initialData = {
    id: id,
    active: true,
    category: category,
    city: data.city || location.city.name,
    country: data.country || location.country.name,
    link: link,
    remote: remote,
    currency: data.money || content.currency,
    title: data.position || content.title,
    salary: data.salary || content.salary,
    contract: type || content.contract,
    company: data.ompanySimple || data.company.name
  }

  return initialData
}
