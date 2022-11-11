import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import snackbar from './snackbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// SIDEBAR

export const SidebarContext = createContext();

export const SidebarState = (props) => {
  const [sidebar, setSidebar] = useState(true);
  const matches = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    if (matches) {
      setSidebar(false);
      document.body.setAttribute('minisidebar', true);
      // document.querySelector('main').style.paddingLeft = "var(--miniSidebar-width)";
    }
    else {
      // document.querySelector('main').style.paddingLeft = "var(--sidebar-width)";
    }
  }, [matches]);

  useEffect(() => {
    if (!sidebar) {
      document.body.setAttribute('minisidebar', true);
    }
    else {
      document.body.setAttribute('minisidebar', false);
    }
  }, [sidebar]);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};


// WORK

export const WorkContext = createContext();

export const WorkState = (props) => {

  const getWork = () => {
    const work = JSON.parse(localStorage.getItem('work'));
    if (work) {
      return work;
    }
    else {
      return [];
    }
  };

  const getPinnedWork = () => {
    const pinnedWork = JSON.parse(localStorage.getItem('pinnedWork'));
    if (pinnedWork) {
      return pinnedWork;
    }
    else {
      return [];
    }
  };

  const getTrashWork = () => {
    const trashWork = JSON.parse(localStorage.getItem('trashWork'));
    if (trashWork) {
      return trashWork;
    }
    else {
      return [];
    }
  };

  const [work, setWork] = useState(getWork());
  const [updateWork, setUpdateWork] = useState(false);
  const [pinnedWork, setPinnedWork] = useState(getPinnedWork());
  const [trashWork, setTrashWork] = useState(getTrashWork());

  const deleteWork = (id) => {
    const arr = work.filter((e, index) => {
      return index !== id;
    });
    setWork(arr);
    setTrashWork(current => [{ title: work[id].title, description: work[id].description, pinned: work[id].pinned }, ...current]);
    snackbar('Work trashed');
  };

  const pinWork = (id) => {
    const arr = work.filter((e, index) => {
      return index !== id;
    });
    setWork(arr);
    setPinnedWork(current => [{ title: work[id].title, description: work[id].description, pinned: true }, ...current]);
    snackbar('Work pinned');
  };

  const unpinWork = (id) => {
    const arr = pinnedWork.filter((e, index) => {
      return index !== id;
    });
    setPinnedWork(arr);
    setWork(current => [{ title: pinnedWork[id].title, description: pinnedWork[id].description, pinned: false }, ...current]);
    snackbar('Work unpinned');
  };

  const deletePinnedWork = (id) => {
    const arr = pinnedWork.filter((e, index) => {
      return index !== id;
    });
    setPinnedWork(arr);
    setTrashWork(current => [{ title: pinnedWork[id].title, description: pinnedWork[id].description, pinned: true }, ...current]);
    snackbar('Work trashed');
  };

  const deleteTrashWork = (id) => {
    const arr = trashWork.filter((e, index) => {
      return index !== id;
    });
    setTrashWork(arr);
  };

  const restoreWork = (id) => {
    const arr = trashWork.filter((e, index) => {
      return index !== id;
    });
    setTrashWork(arr);
    const isPinned = trashWork[id].pinned;
    isPinned ?
      setPinnedWork(current => [{ title: trashWork[id].title, description: trashWork[id].description, pinned: isPinned }, ...current]) :
      setWork(current => [{ title: trashWork[id].title, description: trashWork[id].description, pinned: isPinned }, ...current]);
    snackbar('Work restored');
  };

  useEffect(() => {
    localStorage.setItem('trashWork', JSON.stringify(trashWork));
  }, [trashWork]);

  useEffect(() => {
    localStorage.setItem('pinnedWork', JSON.stringify(pinnedWork));
  }, [pinnedWork]);

  useEffect(() => {
    localStorage.setItem('work', JSON.stringify(work));
  }, [work]);

  return (
    <WorkContext.Provider value={{ work, setWork, updateWork, setUpdateWork, pinnedWork, setPinnedWork, pinWork, unpinWork, deletePinnedWork, deleteWork, deleteTrashWork, restoreWork, trashWork, setTrashWork }}>
      {props.children}
    </WorkContext.Provider>
  );
};

export default function GlobalContext(props) {
  return (
    <WorkState>
      <SidebarState>
        {props.children}
      </SidebarState>
    </WorkState>
  );
}

SidebarState.propTypes = {
  children: PropTypes.node.isRequired,
};
WorkState.propTypes = {
  children: PropTypes.node.isRequired,
};
GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};