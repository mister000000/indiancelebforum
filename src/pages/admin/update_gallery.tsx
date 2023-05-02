import React from 'react'
import styles from '@/styles/admin.module.css'

interface ImageDetails {
  name: string;
  alt: string;
  src: string;
  caption: string;
  type: string;
  actress: string;
  date: string;
  enhanced: boolean;
}

const Update_gallery = () => {

  const [status, setStatus] = React.useState<Boolean | null>(null);
  const [id, setId] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget);
    const body: ImageDetails = {
      name: form.get('name') as string,
      alt: form.get('alt') as string,
      src: form.get('src') as string,
      caption: form.get('caption') as string,
      type: form.get('type') as string,
      actress: form.get('actress') as string,
      date: form.get('date') as string,
      enhanced:form.get('enhanced') === 'on',
    }
    const data = await fetch("/api/gallery/update/uhq", {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (data.status === 201) {
      setStatus(true);
      setId((await data.json()).id);
    } else {
      setStatus(false);
    }
  }
  return (
    <div className={styles.container}>
      <h1>Add to gallery</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className={styles.formControl}>
          <label htmlFor="alt">Alt text:</label>
          <input type="text" id="alt" name="alt" required />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="src">Image source URL:</label>
          <input type="text" id="src" name="src" required />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="caption">Caption:</label>
          <textarea id="caption" name="caption"></textarea>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="type">Image type:</label>
          <select id="type" name="type" required>
            <option value="portrait">Instagram</option>
            <option value="landscape">UHQ</option>
            <option value="square">Getty</option>
          </select>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="actress">Actress name:</label>
          <input type="text" id="actress" name="actress" />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="enhanced">Enhanced:</label>
          <input type="checkbox" id="enhanced" name="enhanced" />
        </div>

        <button type="submit" className={styles.button}>Upload</button>
      </form>
    <span className={styles.span}><span className={styles.status}>status</span>: <span className={status ? styles.success : styles.failure}>{status ? "success" : status === null ? "" : "failure"}</span></span>
    {id && <span className={styles.span}>__id: {id}</span>}
    </div>
  )
}

export default Update_gallery