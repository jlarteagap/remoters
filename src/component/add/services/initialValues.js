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

export const initialValuesEdit = ({ jobs, isRemote }) => {
  const { id, category, ubication, content, link } = jobs
  console.log(id, category, ubication, content, link)
  const data = {
    id: id,
    active: false,
    category: category,
    city: ubication,
    country: ubication.name,
    link: link,
    remote: isRemote,
    money: content.currency,
    title: content.title,
    salary: content.salary,
    contract: content.contract,
    companySimple: jobs.companySimple
  }

  return data
}
