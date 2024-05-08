import  { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create ({
  
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    lineHeight: 1.5,
  },
  resumeContainer: {
    display: 'flex',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#2E2F42',
    padding: '20px 30px 0',
  },
  contacts: {
    paddingBottom: 10,
    color: '#FFF',
  },
  techSkills: {
    paddingBottom: 10,
    color: '#FFF',
  },
  softSkills: {
    paddingBottom: 10,
    color: '#FFF',
  },
  phoneNumber: {
    color: '#FFF',
  },
  email: {
    color: '#FFF',
  },
  techSkillsList: {
    listStylePosition: 'inside',
  },
  softSkillsList: {
    listStylePosition: 'inside',
  },
  socialLinks: {
    display: 'flex',
    paddingLeft: 0,
    gap: 30,
  },
  socialIcon: {
    listStyle: 'none',
  },
  socialIconSvg: {
    color: '#FFF',
  },
  mainContent: {
    width: '75%',
    padding: 25,
    backgroundColor: '#FFF',
    color: '#2E2F42',
  },
  projectsList: {
    listStylePosition: 'inside',
  },
  workExperienceList: {
    listStylePosition: 'inside',
  },
  educationList: {
    listStylePosition: 'inside',
  },
  h1: {
    paddingBottom: 15,
  },
  h2: {
    paddingBottom: 15,
  },
  coverLetter: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 4,
    backgroundColor: '#F4F4FD',
    border: '1px solid #ccc',
  },
  formTextArea: {
    width: 950,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#F4F4FD',
    border: '1px solid #ccc',
    color: '#2E2F42',
  },
  formWrap: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formInput: {
    width: 400,
    padding: 15,
    marginRight: 5,
    borderRadius: 4,
    backgroundColor: '#F4F4FD',
    border: '1px solid #ccc',
    color: '#2E2F42',
  },
  formButton: {
    display: 'block',
    border: 'none',
    borderRadius: 4,
    color: '#fff',
    backgroundColor: '#4d5ae5',
    cursor: 'pointer',
    width: 100,
  },
});